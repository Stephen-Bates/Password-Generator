# Password-Generator

## Password generator javascript example

This is my submission for my bootcamp module challenge centered around javascript. 

It is a simple static website with one purpose. When the user clicks the 'Generate Password' button, they are given a succession of prompts to decide how to generate a password of a user designated size consisting of randomly selected characters from a pool of user selected sets of characters

## Installation

N/A

## Usage

When the user clicks the Generate Password button, they will be prompet to enter the length of the password they wish to be generated.
If the user enters a number less than 8 or greater than 128, or input something other than a number, they will be asked to 
They will then be asked if they would like several sets of characters included in the potential pool of characters.
These sets include:
    Uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    Lowercase: 'abcdefghijklmnopqrstuvwxyz'
    Numerals: '0123456789'
    Special Characters: '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'

If no sets are chosen, the user will be asked to chose at least one, or at that time they may quit the process by canceling the confirmation prompt

The web page can currently be found hosted on Github [here](https://stephen-bates.github.io/Password-Generator//).

The should resemble the image below:

![Current snapshot of the hosted page](./assets/images/Password-Generator-snapshot.png)

## Credits

Original HTML, CSS, and Javascript provided by edX Boot Camps LLC and is provided inside the Develop subdirectory

## Liscense

N/A