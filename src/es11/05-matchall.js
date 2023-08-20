const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, kiwi, uva, mora, sandia, melon, etc';

for (const match of fruit.matchAll(regex)){
    console.log(match);
}