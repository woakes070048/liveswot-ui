import {LoadToken} from "../../actions/index";
import authUtils from "../../../utils/auth";
import initApp from './initApp';

export default initApp({authUtils, LoadToken});