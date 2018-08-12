# Coffee Roaster Notes

Take notes from coffee roasting experiences.

## Recipe Syntax

`6.5L0.7 > 1.0M.9` reads like this: _start with 6.5 minutes at low temperature and 70% fan speed, when remaing 1.0 minute change temperature to medium and fan speed to 90%_.

## Motivation

After taking several notes on some pieces of paper about my experiments while roasting green coffee beans, it started look quite confusing to remember how one roast looked like without a picture.

## Quasar and VueJs

This is also a Quasar and VueJS experimentation.

## Project setup
```
npm install
```

Compiles and hot-reloads for development
```
npm run serve
```

Compiles and minifies for production
```
npm run build
```

Lints and fixes files
```
npm run lint
```

## Components Relashionship

	+---------------+             
	|     Home      |             
	+-------+-------+             
	        |                     
	        |                     
	+-------v-------+             
	|     Note      |             
	+-------+-------+             
	        |                     
	        |    +---------------+
	        +--->|   NoteRecipe  |
	             +---------------+

 _source_: https://textik.com/#07e1546a13071422