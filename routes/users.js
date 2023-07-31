import express from "express";
import {
  auth,
  checkServices,
  planList,
  verifyCustomerDetails,
  getEnrollmentDetails,
  updateEnrollmentDetails,
  validateAddress,
  programList,
  eligibiltyCheck,
  eligibiltyStatusCheck,
  verifyACP,
  getPlanList,
  createCustomer,
  googleAutoFillMap
} from "../controllers/users.js";

const router = express.Router();

router.post("/authenticate", auth);
router.post("/enrollment", checkServices);
router.post("/plan", planList);
router.post("/verifyCustomerDetails", verifyCustomerDetails);
router.post("/getEnrollmentDetails", getEnrollmentDetails);
router.post("/updateEnrollmentDetails", updateEnrollmentDetails);
router.post("/validateAddress", validateAddress);
router.post("/programList", programList);
router.post("/eligibiltyCheck", eligibiltyCheck);
router.post("/eligibiltyStatusCheck", eligibiltyStatusCheck);
router.post("/verifyACP", verifyACP);
router.post("/getPlanList", getPlanList);
router.post("/createCustomer", createCustomer);
router.post("/googleAutoFillMap", googleAutoFillMap);


export default router;
