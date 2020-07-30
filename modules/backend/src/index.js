import { listen } from './services/http'
import { connect } from './services/database'

connect().then(listen)


