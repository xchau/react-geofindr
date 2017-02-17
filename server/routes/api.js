const express = require('express');
const router = require('express').Router();
const knex = require('../../knex');

router.get('/', (req, res) => {
  knex('locations')
    .select('*')
    .orderBy('id')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})
