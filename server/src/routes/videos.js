import express from 'express'
import {
  addVideo, updateVideo, deleteVideo, getVideo, getAllVideos, getUserVideos
} from '../controllers/video.js'
import { authentication } from '../middlewares/authentication.js'


const router = express.Router()


router.get('/user_videos', authentication, getUserVideos)
router.post('/', authentication, addVideo)
router.put('/:id', authentication, updateVideo)
router.delete('/:id', authentication, deleteVideo)
router.get('/:id', getVideo)
router.get('/', getAllVideos)



export default router