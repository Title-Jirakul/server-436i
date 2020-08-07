import express from "express"
import { verifyAuthorizationToken } from "../controllers/auth/helpers/verifyAuthorizationToken"
import { 
  authRoutes, 
  accountRoutes, 
  coursesRoutes,
  sessionRoutes,
  testRoutes,
  facebookRoutes,
  spotifyRoutes, 
  matchesRoutes
} from "./routes"

/**
 * @Routers
 */
import authRouter from "../controllers/auth/authRouter"
import courseRouter from "../controllers/courses/coursesRouter"
import accountRouter from "../controllers/account/accountRouter"
import facebookRouter from "../controllers/facebook/facebookRouter"
import sessionRouter from "../controllers/session/sessionRouter"
import spotifyRouter from "../controllers/spotify/spotifyRouter"
import matchesRouter from "../controllers/matches/matchesRouter"
import testRouter from "../controllers/test/testRouter"

const api = express()

api.use(accountRoutes, verifyAuthorizationToken, accountRouter)
api.use(coursesRoutes, verifyAuthorizationToken, courseRouter)
api.use(matchesRoutes, verifyAuthorizationToken, matchesRouter)

api.use(authRoutes, authRouter)
api.use(sessionRoutes, sessionRouter)
api.use(facebookRoutes, verifyAuthorizationToken, facebookRouter)
api.use(spotifyRoutes, spotifyRouter)

// if (process.env.NODE_ENV === "development") {
  api.use(testRoutes, testRouter)
// }

export default api