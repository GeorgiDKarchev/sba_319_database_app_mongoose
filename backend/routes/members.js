import{Router} from 'express';
import Member from '../models/members.js';


const router = new Router ();

/**
 * GET - return all members
 */

router.get('/', async (req,res)=>{
    const members = await Member.find({});
    res.status(200).json(members);
});

/**
 * GET /:id 
 * return member by id
 */
 router.get('/:id', async (req, res) => {
    const member =  await Member.findById(req.params.id);

    if(!member) return res.status(404).json({msg:"Member id not found"});
    else res.json(member);
 });
// router.get("/:id", async(req, res)=>{
//     const member = await Member.findById(req.params.id);
//     if (!member) res.send("Not found").status(404);
//     else res.send(member).status(200);
//   });



/**
 * POST - create a new member
 */
router.post('/', async (req, res)=>{
    const member = await Member.create(req.body);
    res.status(201).json(member);
});





export default router;