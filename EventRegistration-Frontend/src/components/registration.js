import axios from 'axios'
var config = require('../../config')


var backendConfigurer = function () {
  switch (process.env.NODE_ENV) {
    case 'development':
      return 'http://' + config.dev.backendHost + ':' + config.dev.backendPort
    case 'production':
      return 'https://' + config.build.backendHost + ':' + config.build.backendPort
  }
}

var frontendConfigurer = function () {
  switch (process.env.NODE_ENV) {
    case 'development':
      return 'http://' + config.dev.host + ':' + config.dev.port
    case 'production':
      return 'https://' + config.build.host + ':' + config.build.port
  }
}


var backendUrl = backendConfigurer()
var frontendUrl = frontendConfigurer()

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})


function PersonDto (name) {
  this.name = name
  this.events = []
}

function EventDto (name, date, start, end) {
  this.name = name
  this.eventDate = date
  this.startTime = start
  this.endTime = end
}




export default {
  name: 'eventregistration',

  data () {
    return {
      persons: [],
      newPerson: '',
      errorPerson: '',
      response: [],
       events: [],
       newEvent: {
        name: '',
        eventDate: '2017-12-08',
        startTime: '09:00',
        endTime: '11:00'
      },
    errorEvent: ''
    }
  },

  created: function () {
        // Initializing persons from backend
    AXIOS.get('/persons')
    .then(response => {
      // JSON responses are automatically parsed.
      this.persons = response.data
    })
    .catch(e => {
      this.errorPerson = e
    })
    // Initializing events
    AXIOS.get('/events')
    .then(response => {
      this.events = response.data
    })
    .catch(e => {
      this.errorEvent = e
      // this.errors.push(e)
    })
  },

  methods: {
    createPerson: function (personName) {
        AXIOS.post('/persons/'.concat(personName), {}, {})
        .then(response => {
        // JSON responses are automatically parsed.
          this.persons.push(response.data)
          this.errorPerson = ''
          this.newPerson = ''
        })
        .catch(e => {
          var errorMsg = e.response.data.message
          console.log(errorMsg)
          this.errorPerson = errorMsg
        })
    },

   registerEvent: function (personName, eventName) {
      var indexEv = this.events.map(x => x.name).indexOf(eventName)
      var indexPart = this.persons.map(x => x.name).indexOf(personName)
      var person = this.persons[indexPart]
      var event = this.events[indexEv]
      AXIOS.post('/register', {},
        {params: {
          pname: person.name,
          ename: event.name}})
      .then(response => {
        // Update appropriate DTO collections
        person.events.push(event)
        this.selectedPerson = ''
        this.selectedEvent = ''
        this.errorRegistration = ''
      })
      .catch(e => {
        var errorMsg = e
        console.log(errorMsg.message)
        this.errorRegistration = errorMsg
      })
    },
    createEvent: function (name, eventDate, startTime, endTime) {
      console.log(name, eventDate, startTime, endTime)
      AXIOS.post('/events/'.concat(name), {},
        {params: {
          date: eventDate,
          startTime: startTime,
          endTime: endTime}})
      .then(response => {
        // Update appropriate DTO collections
        this.events.push({name, eventDate, startTime, endTime})
        this.selectedPerson = ''
        this.selectedEvent = ''
        this.errorRegistration = ''
      })
      .catch(e => {
        var errorMsg = e
        console.log(errorMsg.response.data)
        console.log({e})
        this.errorRegistration = errorMsg.response.data
      })
    }
  }

}
