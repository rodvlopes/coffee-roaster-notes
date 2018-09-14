# Coffee Roaster Notes

Take notes from coffee roasting experiences.

## Recipe Syntax

`6.5L0.7 > 1.0M.9` reads like this: _start with 6.5 minutes at low temperature and 70% fan speed, when remaing 1.0 minute change temperature to medium and fan speed to 90%_.

## Motivation

After taking several notes on some pieces of paper about my experiments while roasting green coffee beans with my FreshRoaster SR500, it started look quite confusing to remember how one roast looked like without a picture and a descriptive step-by-step so that could be possible to reproduce it again.

## Quasar and VueJs

This is also a Quasar and VueJS experimentation.

## SQLite3 w/ JSON1

Sqlite doesn't come by default with JSON support neither full text search support, to make it possible it's required to recompile it with these extensions enabled.

    curl "https://www.sqlite.org/2018/sqlite-autoconf-3240000.tar.gz" -o "sqlite.tar.gz"
    tar zxvf sqlite.tar.gz
    cd sqlite-autoconf-3240000
    CFLAGS='-DSQLITE_ENABLE_FTS5 -DSQLITE_ENABLE_JSON1' ./configure
    make
    sudo make install