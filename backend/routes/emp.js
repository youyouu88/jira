const router = express.Router();

const get = require('../controllers/empGet');
const post = require('../controllers/empPost');

router.get('/',get);
router.post('/', post);

