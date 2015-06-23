[![Build Status](https://travis-ci.org/hyprstack/animal-vital-sign-reader.svg?branch=master)](https://travis-ci.org/hyprstack/animal-vital-sign-reader)
# Animal Vitality Sensor App

__This project aims at using a low-cost, small, easily transportable, flexible and easily programmed compound component of computer and sensor, to create a real-time vitality sensor app aimed at the monitoring the vitals signs of high performance sport animals, namely show-jumping and race horses, as to prevent deaths caused by uncaught illnesses. This application aims at reporting directly to a designated device (mobile, laptop, tablet, pc, etc.) with an alert if there is a spike in any vital signs.__

## Used technologies

### Hardware

For the hardware I will begin the project with a `raspberry-pi` or `arduino`, as this follows the low cost approach I intend to implement. This component also comes with the advantage that it is easy to program and is compatible with `nodejs`. As for sensors, there are a few options:[heart-rate pad](http://pulsesensor.com/), [Raspberry PI with Ant](http://www.johannesbader.ch/2014/06/track-your-heartrate-on-raspberry-pi-with-ant/) and [adafruit](https://www.adafruit.com/products/1077). 

___

### Software
 
##### Front-end

For the front-end I will be implementing a `Backbone` framework, using either `Handlebars` or `Underscore` templating, `HTML5` and either `LESS` or `SASS` for `CSS`. 

##### Backend

###### Language

The chosen language for the __backend__ will be `Nodejs` and I will be using `hapi.js` as a framework for my api.

###### Database/Infrastructure

At an initial stage all backend infrastructure will be held on `Couchbase` and run on `Heroku`, or/later [moving to] `AWS`'s [when the project proves viable] `dynamoDB`.

#### Unit Testing

All front-end code in this project will be tested using the well supported frameworks and basic construct of `Mocha`, `Chai` and `Sinon`.
Backend will use the tools provided by the `hapi` framework, `joi` and `lab`.

#### Continuous Integration

`Travis` although something like `CircleCI` or `Codeship` might be considered further down the line as they support __Continuous Deployment__ too. [See here](http://www.quora.com/What-is-the-difference-between-Bamboo-CircleCI-CIsimple-Ship-io-Codeship-Jenkins-Hudson-Semaphoreapp-Shippable-Solano-CI-TravisCI-and-Wercker?share=1) for various opinions of these tools.


#### CDN

I will be using amazon's `cloud front` for my [CDN](https://en.wikipedia.org/wiki/Content_delivery_network).

___

__The main goal at this point is to keep *costs* as low as possible and *interation cycles* as short as possible as to produce the first *MVP* as soon as possible.__