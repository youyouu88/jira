const router = express.Router();

const getID = require('../controllers/ticketG');
const get = require('../controllers/tikGst');
const post = require('../controllers/ticketP');

router.get('/id/:id',getID);
router.get('/status/:status',get);

router.post('/', post);
