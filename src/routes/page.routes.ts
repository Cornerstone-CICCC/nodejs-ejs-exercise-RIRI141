import { Router, Request, Response } from "express";

const pageRouter = Router()

pageRouter.get('/', (req: Request, res: Response) => {
    res.status(200).render('index', { title: "Home"})
})

pageRouter.get('/about', ( req: Request, res: Response) => {
    res.status(200).render('about', { title: "About"})
})
pageRouter.get('/contact', ( req: Request, res: Response) => {
    res.status(200).render('contact', { title: "Contact"})
})

export default pageRouter