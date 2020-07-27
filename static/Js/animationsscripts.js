function getRandomInt(max) {
    var plusOrMinus  = Math.random() < 0.5 ? -Math.random() : Math.random();
    return Math.floor(plusOrMinus * Math.floor(max) );
}
gsap.registerPlugin('ScrollTrigger')
gsap.from('.jumbotron', {opacity: 0,scrollTrigger: {trigger : ".jumbotron",toggleActions : "restart pause restart pause"}, duration:1,x:getRandomInt(-100) ,rotation:getRandomInt(360),y:getRandomInt(100)})
gsap.from('.videofrom', {opacity: 0,
scrollTrigger: {trigger : ".videofrom",
    toggleActions : "restart pause restart pause"},
    duration:1.5,rotation:getRandomInt(60), x:getRandomInt(150), y:getRandomInt(-150)})
gsap.from('.videofrom2', {opacity: 0,
scrollTrigger: {trigger : ".videofrom2",
    toggleActions : "restart pause reverse pause"},
    duration:1.5,rotation:getRandomInt(60),y:getRandomInt(150) ,x:getRandomInt(-150)})
gsap.from('.allposts', {scrollTrigger: { trigger : ".allposts", toggleActions : "restart pause restart pause"},rotation:getRandomInt(90), duration:1.5,y:getRandomInt(100) ,x:getRandomInt(-100) } )
gsap.from('.inputofpost', {opacity: 0,scrollTrigger: {trigger : ".inputofpost",toggleActions : "restart pause restart pause"}, duration:1,y:getRandomInt(-100) ,rotation:getRandomInt(360), x:getRandomInt(100)})
gsap.from('.allPosatos', {opacity: 0,scrollTrigger: {trigger : ".allPosatos",toggleActions : "restart pause restart pause"}, duration:1,rotation:getRandomInt(360), y:getRandomInt(-100),x:getRandomInt(100)})
gsap.from('#checkout', {opacity: 0,scrollTrigger: {trigger : "#checkout",toggleActions : "restart pause restart pause"}, duration:1,rotation:getRandomInt(360), y:getRandomInt(-100),x:getRandomInt(100)})
gsap.from('.card', {opacity: 0,scrollTrigger: {trigger : ".card",toggleActions : "restart pause restart pause"}, duration:1,rotation:getRandomInt(360), y:getRandomInt(-100),x:getRandomInt(100)})

//This is about my journey
gsap.from('#journeyread', {opacity: 0,scrollTrigger: {trigger : "#journeyread",toggleActions : "restart pause restart pause"}, duration:1,rotation:getRandomInt(360), y:getRandomInt(-100),x:getRandomInt(100)})

gsap.from('.uno', {opacity: 0,scrollTrigger: {trigger : ".uno",toggleActions : "restart pause restart pause"}, duration:1,rotation:getRandomInt(360), y:getRandomInt(-100),x:getRandomInt(100)})
gsap.from('.dos', {opacity: 0,scrollTrigger: {trigger : ".dos",toggleActions : "restart pause restart pause"}, duration:1,rotation:getRandomInt(360), y:getRandomInt(-100),x:getRandomInt(100)})
gsap.from('.tres', {opacity: 0,scrollTrigger: {trigger : ".tres",toggleActions : "restart pause restart pause"}, duration:1,rotation:getRandomInt(360), y:getRandomInt(-100),x:getRandomInt(100)})
gsap.from('.cuatro', {opacity: 0,scrollTrigger: {trigger : ".cuatro",toggleActions : "restart pause restart pause"}, duration:1,rotation:getRandomInt(360), y:getRandomInt(-100),x:getRandomInt(100)})
gsap.from('.cinco', {opacity: 0,scrollTrigger: {trigger : ".cinco",toggleActions : "restart pause restart pause"}, duration:1,rotation:getRandomInt(360), y:getRandomInt(-100),x:getRandomInt(100)})
gsap.from('.seis', {opacity: 0,scrollTrigger: {trigger : ".seis",toggleActions : "restart pause restart pause"}, duration:1,rotation:getRandomInt(360), y:getRandomInt(-100),x:getRandomInt(100)})
gsap.from('.siete', {opacity: 0,scrollTrigger: {trigger : ".siete",toggleActions : "restart pause restart pause"}, duration:1,rotation:getRandomInt(360), y:getRandomInt(-100),x:getRandomInt(100)})
gsap.from('.ocho', {opacity: 0,scrollTrigger: {trigger : ".ocho",toggleActions : "restart pause restart pause"}, duration:1,rotation:getRandomInt(360), y:getRandomInt(-100),x:getRandomInt(100)})
gsap.from('.nueve', {opacity: 0,scrollTrigger: {trigger : ".nueve",toggleActions : "restart pause restart pause"}, duration:1,rotation:getRandomInt(360), y:getRandomInt(-100),x:getRandomInt(100)})
gsap.from('.diez', {opacity: 0,scrollTrigger: {trigger : ".diez",toggleActions : "restart pause restart pause"}, duration:1,rotation:getRandomInt(360), y:getRandomInt(-100),x:getRandomInt(100)})
