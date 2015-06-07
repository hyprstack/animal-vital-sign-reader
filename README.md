# Animal Vitality Sensor App

__This project aims at using a low-cost, small, easily transportable, flexible and easily programmed compound component of computer and sensor, to create a real-time vitality sensor app aimed at the monitoring the vitals signs of high performance sport animals, namely show-jumping and race horses, as to prevent deaths caused by uncaught illnesses. This application aims at reporting directly to a designated device (mobile, laptop, tablet, pc, etc.) with an alert if there is a spike in any vital signs.__

## Used technologies

### Hardware

For the hardware I will begin the project with a `raspberry-pi`, as this follows the low cost approach I intend to implement. This component also comes with the advantage that it is easy to program and is compatible with `nodejs`. I have not yet chosen any sensor pads, and further research needs to be done in this area. 

___

### Software
 
##### Front-end

For the front-end I will be implementing a `Backbone` framework, using either `Handlebars` or `Underscore` templating, `HTML5` and either `LESS` or `SASS` for `CSS`. 

##### Backend

###### Language

The chosen language for the __backend__ will be `Nodejs`.

###### Database/Infrastructure

At an initial stage all backend infrastructure will be held on `Couchbase` and run on `Heroku`, later moving to `AWS` when the project proves viable.

#### Unit Testing

All code in this project will be tested using the well supported frameworks and basic construct of `Mocha`, `Chai` and `Sinon`.

#### Continuous Integration

`Travis` although something like `CircleCI` or `Codeship` might be considered further down the line as they support __Continuous Deployment__ too. [See here](http://www.quora.com/What-is-the-difference-between-Bamboo-CircleCI-CIsimple-Ship-io-Codeship-Jenkins-Hudson-Semaphoreapp-Shippable-Solano-CI-TravisCI-and-Wercker?share=1) for various opinions of these tools.

___

__The main goal at this point is to keep *costs* as low as possible and *interation cycles* as short as possible as to produce the first *MVP* as soon as possible.__