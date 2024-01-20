import{Router} from 'express';
import member from '../models/members.js';


const router = new Router ();

/**
 * GET - return all members
 */

router.get('/', async (req,res)=>{
    const members = await Member.find({});
    res.status(200). json(members);
});


/**
 * POST - create a new member
 */
router.post('/', async (req, res)=>{
    const member = await Member.create (req.body);
    res.status(203).json(member);
});





export default router;