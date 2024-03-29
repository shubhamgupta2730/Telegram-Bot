const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();
//to get telegram bot api key : search botfather on telegram:
///start
//newbot

binarysearch = `


let recursiveFunction = function (arr, x, start, end) {
 
  // Base Condition
  if (start > end) return false;

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // Compare mid with given key x
  if (arr[mid] === x) return true;

  // If element at mid is greater than x,
  // search in the left half of mid
  if (arr[mid] > x)
      return recursiveFunction(arr, x, start, mid - 1);
  else

      // If element at mid is smaller than x,
      // search in the right half of mid
      return recursiveFunction(arr, x, mid + 1, end);
}

// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (recursiveFunction(arr, x, 0, arr.length - 1)) {
  console.log("Element found!");
}
else { console.log("Element not found!"); }

x = 6;

if (recursiveFunction(arr, x, 0, arr.length - 1)) {
  console.log("Element found!");
}
else { console.log("Element not found!"); }`
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Welcome to my bot'))

bot.command('binarysearchjs', (ctx) => ctx.reply(binarysearch));

bot.on(message('sticker'), (ctx) => ctx.reply('👍'))

bot.command('stack', async function(ctx){
  const response = await axios.get('https://raw.githubusercontent.com/amitbansal7/Data-Structures-and-Algorithms/master/4.Stack/StackLinkedList.c')
  return ctx.reply(response.data);
})

bot.launch();