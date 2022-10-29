let btn = document.querySelector("button")
let qt = document.querySelector("span")
let per = document.getElementById("author")

const quotes = [{
    qt: `"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it."` ,
    per: `Steve Jobs`
}, {
    qt: `"Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny."`,
    per: `Lao-Tze`
}, {
    qt: `"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed."`,
    per: `Michael Jordan`
}, {
    qt: `"When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life." `,
    per: `John Lennon`
}, {
    qt: `"Many of life’s failures are people who did not realize how close they were to success when they gave up."` ,
    per: `Thomas A. Edison`
}, {
    qt: `"Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve."` ,
    per: `Mary Kay Ash `
}, {
    qt: `"If you're not stubborn, you'll give up on experiments too soon. And if you're not flexible, you'll pound your head against the wall and you won't see a different solution to a problem you're trying to solve." `,
    per: `Jeff Bezos`
}, {
    qt:`"Identity is a prison you can never escape, but the way to redeem your past is not to run from it, but to try to understand it, and use it as a foundation to grow."` ,
    per: `Jay-Z`
}]

btn.addEventListener('click' , function(){
    let random = Math.floor(Math.random()*quotes.length);
    qt.innerHTML = quotes[random].qt;
    per.innerHTML = quotes[random].per;
})