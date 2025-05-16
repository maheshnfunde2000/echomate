
const express = require('express');
const router = express.Router();
const { getClusters, createCluster } = require('../controllers/clusterController');

// GET all clusters
router.get('/', getClusters);

// POST a new cluster
router.post('/', createCluster);

module.exports = router;
