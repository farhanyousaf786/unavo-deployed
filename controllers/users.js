import axios from "axios";
import { response } from "express";

export const auth = async (req, res) => {
  var dataDemo = {
    vendor_id: "MaxSip",
    username: "MaxSipUser",
    password: "MaxSipbtK123hyutrw22",
    pin: "987659876522",
    agent_id: "ewebsiteapi",
    source: "WEBSITE",
  };

  // vendor_id: "Demo-MaxSip",
  // username: "Demo-MaxSipUser",
  // password: "Demo-MaxSipbtK123hyutrw22",
  // pin: "Demo-987659876522",
  // agent_id: "ewebsiteapi",
  // source: "WEBSITE",

  await axios
    .post("https://www.vcareapi.com:8080/authenticate", {
      vendor_id: "MaxSip",
      username: "MaxSipUser",
      password: "MaxSipbtK123hyutrw22",
      pin: "987659876522",
      agent_id: "ewebsiteapi",
      source: "WEBSITE",
    })
    .then(function (response) {
      console.log("1 this is respnse from Server:>>>>>", response);
      res.send(response.data.token);
    })
    .catch(function (error) {
      console.log("1 Error respnse from Server:>", error);
      res.send(response.data);
    });
};

export const checkServices = async (req, res) => {
  console.log(
    "2 Zip Code Plan List >>>>>>>>>> ",
    req.body.zipCode,
    "2 >>>>>> ",
    req.body.token
  );
  const config = {
    headers: { token: req.body.token },
  };
  var apiUrl = "https://www.vcareapi.com:8080/enrollment";

  axios
    .post(
      apiUrl,
      {
        zip_code: req.body.zipCode,
        login_log_otp: 31312,
        enrollment_type: "LIFELINE",
        is_enrollment: "Y",
        coordinate: { latitude: "", longitude: "" },
        action: "check_service_availability",
        agent_id: "Devteam",
        source: "WEBSITE",
        request_name: "enrollment",
        vendor_id: "MaxSip",
        token_id: 548016583,
        ip: "52.6.37.152, 172.22.3.133",
      },
      config
    )
    .then(function (response) {
      console.log("3 Server Response:>>>>>>>>>>>>>>>>>>", response.data);

      res.send(response.data);
    })
    .catch(function (error) {
      console.log("3 Error respnse from Server:>", error);
      res.send(response.data);
    });
};

export const planList = async (req, res) => {
  var apiUrl = "https://www.vcareapi.com:8080/plan";
  const config = {
    headers: { token: req.body.token },
  };
  var data = {
    enrollment_type: "LIFELINE",
    is_enrollment: "Y",
    zip_code: req.body.zipCode,
    login_log_otp: 31312,
    carrier: "",
    lifeline_enrollment_category: "ACP",
    action: "plan_list",
    agent_id: "Devteam",
    source: "WEBSITE",
    request_name: "plan",
    vendor_id: "MaxSip",
    token_id: 548016589,
    ip: "52.6.37.152, 172.22.3.133",
  };

  console.log(
    "3 Zip Code Plan List >>>>>>>>>> ",
    req.body.zipCode,
    ">>>>>> ",
    req.body.token
  );

  axios
    .post(apiUrl, data, config)
    .then(function (response) {
      console.log("4 Server Response:>>>>>>>>>>>>>>>>>>", response.data);

      res.send(response.data);
    })
    .catch(function (error) {
      console.log("4 Error respnse from Server:>", error);
      res.send(response.data);
    });
};

export const verifyCustomerDetails = async (req, res) => {
  var apiUrl = "https://www.vcareapi.com:8080/customer";
  const config = {
    headers: { token: req.body.token },
  };

  var data = {
    email: req.body.email,
    primary_telephone_number: req.body.pNumber,
    enrollment_id: req.body.rId,
    lifeline_enrollment_type: "ACP",
    action: "verify_contact_detail",
    agent_id: "Devteam",
    source: "WEBSITE",
    request_name: "customer",
    vendor_id: "MaxSip",
    token_id: 548017391,
    ip: "52.6.37.152, 172.22.3.133",
  };

  axios
    .post(apiUrl, data, config)
    .then(function (response) {
      console.log("4 Server Response:>>>>>>>>>>>>>>>>>>", response.data);

      res.send(response.data);
    })
    .catch(function (error) {
      console.log("4 Error respnse from Server:>", error);
      res.send(response.data);
    });
};

export const getEnrollmentDetails = async (req, res) => {
  var apiUrl = "https://www.vcareapi.com:8080/enrollment";
  const config = {
    headers: { token: req.body.token },
  };

  var data = {
    enrollment_id: "",
    is_completed: "",
    email: req.body.email,
    action: "get_enrollments",
    agent_id: "Devteam",
    source: "WEBSITE",
    request_name: "enrollment",
    vendor_id: "MaxSip",
  };

  axios
    .post(apiUrl, data, config)
    .then(function (response) {
      console.log("5 Server Response:>>>>>>>>>>>>>>>>>>", response.data);

      res.send(response.data);
    })
    .catch(function (error) {
      console.log("5 Error respnse from Server:>", error);
      res.send(response.data);
    });
};

export const updateEnrollmentDetails = async (req, res) => {
  var apiUrl = "https://www.vcareapi.com:8080/enrollment";
  const config = {
    headers: { token: req.body.token },
  };
  console.log("fname>>>>>>>", req.body.firstName);
  console.log("lname>>>>>>>", req.body.lastName);

  var userInfo = {
    zip_code: req.body.zipCode,
    is_driving_license_required: "N",
    nlad_verification_override: "N",
    lifeline_alternate_phone_required: "Y",
    lifeline_email_required: "Y",
    nlad_address_override_rural: "N",
    enrollment_id: req.body.eId,
    show_alert_for_carrier: "",
    enrollment_carrier: "",
    validate_tribal_from_address: "N",
    ebb_verify_type: "NV",
    agent_first_name: "KENDALL",
    agent_last_name: "SMITH",
    agent_address: "",
    agetn_signature_location: "",
    agent_dob_month: "",
    agent_dob_day: "",
    agent_dob_year: "",
    initial_chosen_enroll_type: "ACP",
    prefix: "",
    first_name: req.body.firstName,
    middle_name: req.body.min,
    last_name: req.body.lastName,
    second_last_name: "",
    suffix: "JR.",
    ssn: "xxx-xx-" + `${req.body.ssn}`,
    ssn_length: "4",
    month: req.body.dob.substring(5, 7),
    day: req.body.dob.substring(8, 10),
    year: req.body.dob.substring(0, 4),
    old_ts_provider: "",
    old_phone_number: "",
    best_way: ["email", "text message"],
    driving_licence: "md10272087035",
    email: req.body.email,
    phone_number: req.body.pPhone,
    signature: "signature",
    print_font_size: "S",
    same_as_beneficiary: "Y",
    beneficiary_first_name: "lester ",
    beneficiary_middle_name: "",
    beneficiary_last_name: "andrews",
    beneficiary_suffix: "JR.",
    beneficiary_ssn_length: "4",
    beneficiary_ssn: "xxx-xx-9637",
    beneficiary_month: "04",
    beneficiary_day: "16",
    beneficiary_year: "1990",
    ebb_consent: "Y",
    address_one: req.body.address,
    address_two: "",
    address_zip_code: "21804",
    address_city: req.body.city,
    address_state: req.body.sState,
    address_type: "Y",
    same_as_service_address: "1",
    mailing_address_one: "736 Roger st",
    mailing_address_two: "",
    mailing_zip: "21804",
    mailing_city: "Salisbury",
    mailing_state: "MD",
    vacant_status: "",
    is_tribal: "N",
    household_q3: "N",
    household_lifeline: "",
    household_parent: "",
    household_adult: "",
    household_relative: "",
    household_roommate: "",
    household_other: "",
    household_share: "",
    program_value: "MEDIC",
    program_income_type: "PROGRAM",
    program_tribal_type: "Federal Programs",
    household_value: "",
    adults_household: "",
    kids_household: "",
    total_annual_income: "",
    school_name: "",
    school_district_name: "",
    open_tpiv: "",
    eligibility_status_check: "0",
    national_verifier_status: "",
    nv_ebb_application_id: "",
    device_benefit_already_reimbursed: "N",
    ineligible_transfer_exception_val: "",
    public_housing_code_val: "",
    ctl00$ctl00$MainContent$DashboardContent$documentType: "-- Select --",
    tpiv_cat_a_select: "",
    tpiv_cat_b_select: "",
    tpiv_cat_c_select: "",
    plan_id: req.body.pId,
    plan_code: "1",
    plan_name: "$45 20 GB ACP MD Rate Plan 2",
    plan_price: "0.00",
    is_sim_only_order_flag: "N",
    is_free_phone_flag: "N",
    enrollment_credit_card_number: "",
    enrollment_card_name: "",
    enrollment_card_type: "",
    card_expiration_month: "",
    card_expiration_year: "",
    enrollment_cardcode: "",
    card_billing_address_one: "",
    card_billing_address_two: "",
    card_billing_city: "",
    card_billing_state: "",
    card_billing_zip_code: "",
    ELECTRONICALLY_SIGNED: "Y",
    ELECTRONICALLY_SIGNED_STATE_LIST: "ELECTRONICALLY_SIGNED_STATE_LIST",
    is_national_verifier_state: "Y",
    proof_required_for_nv: "NOT REQUIRED",
    nv_id_proof_required: "Y",
    nv_ga_proof_required: "N",
    incomplete_process: "Y",
    incomplete_process_step: "8",
    incomplete_process_program: "MEDIC",
    incomplete_process_income_program: "",
    incomplete_process_rejected_flag: "N",
    agent_enrollment_latitude: "38.374313",
    agent_enrollment_longitude: "-75.599396",
    agent_resolution_width: "1366",
    agent_resolution_height: "768",
    NV_ARR_STATE_REVIEW_BYPASS:
      "AL,AK,AR,CO,CT,DE,FL,GA,ID,KS,KY,MD,MA,MN,MS,MT,NJ,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,AZ,DC,IN,IA,ME,MI,MO,NE,NH,NM,VT,VA,WA,WV,WI,CA,HI,IL,LA,NV,PR,WY",
    SOLIX_REVIEW_BYPASS: "",
    allow_agent_signature_lifeline_enrollment: "N",
    nv_array_tribal_state_nlad_global: "",
    household_default_open: "Y",
    is_household: "N",
    household_q1_val: "Y",
    household_q2_val: "Y",
    household_q3_val: "N",
    bqp_info_not_required: "N",
    manage_carrier_name: "",
    allow_contract_form_to_lifeline_customer: "N",
    show_enrollment_type_dropdown: "NO",
    allowed_enrollment_type: "ACP",
    enrollment_type_default_value: "ACP",
    disable_login: "",
    ebb_duplicate_found: "N",
    lifeline_duplicate_found: "N",
    disable_plan_text: "N",
    show_initial_on_pop: "N",
    enable_genmobile_plan_text: "N",
    ebb_state_through_national_verifier:
      "AL,AK,AR,CO,CT,DE,FL,GA,ID,KS,KY,MD,MA,MN,MS,MT,NJ,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,AZ,DC,IN,IA,ME,MI,MO,NE,NH,NM,VT,VA,WA,WV,WI,CA,HI,IL,LA,NV,PR,WY",
    lifeline_plan_enable_ebb: "YES",
    marketing_consent_mandatory: "",
    disable_terms_conditions: "N",
    change_digital_signature_text: "N",
    change_address_error_text: "N",
    enable_nv_school_name: "Y",
    display_school_district: "N",
    skip_ebb_call: "N",
    restrict_duplicate_lifeline_enrollment_while_doing_combo: "NO",
    show_ebb_consent_for_tx_state_lieline: "N",
    verify_deivce_reimbursement_after_eligibility_check: "Y",
    allow_acp_flag: "Y",
    add_one_more_program_in_case_of_nsl: "N",
    show_step_two_after: "N",
    show_ssn_on_step_two_after: "N",
    show_dob_on_step_two_after: "N",
    show_beneficiary_last_name_as_asterisk: "N",
    show_last_name_as_asterisk: "N",
    show_email_as_asterisk: "N",
    show_contact_number_as_asterisk: "N",
    show_ssn_as_asterisk: "N",
    show_beneficiary_ssn_as_asterisk: "N",
    enable_payment_while_enrollment: "N",
    way_of_contact_mandatory: "N",
    open_tpv_page_before_handover: "N",
    redirect_customer_for_payment_while_enrollment: "",
    hard_stop_in_case_of_verify_device_error: "",
    show_plan_text_unlimited: "",
    show_plan_talk_unlimited: "",
    enroll_transfer_in_nlad_acp_after_review: "N",
    show_nlad_error_in_case_of_rejection: "",
    enable_address_validate_from_usps: "Y",
    enable_application_id_on_program: "",
    allow_acp_transfer_exception: "Y",
    allow_acp_transfer_exception_permission: "N",
    company_name: "Whoop Connect",
    company_id: "88",
    allow_enrollment_in_case_of_unconfirmed_address: "Y",
    is_required_preactivated_sim: "N",
    enable_device_option_for_acp_order: "N",
    device_copay_cost: "11.00",
    acp_non_reimbursed_device_cost: "111.00",
    acp_benefit_transfer_consent_without_selection: "Y",
    sim_only_option_while_reject_order: "Y",
    show_plan_data_in_gb: "",
    verify_market_ebb_value: "111.00",
    hide_driving_license_number: "",
    hard_stop_in_case_of_duplicate_ebb_for_combo: "",
  };

  console.log(">>>>>>>>>>>rgreg>>", JSON.stringify(userInfo));
  console.log(">>>>>>>>>>>rgreg>>", userInfo);

  var data = {
    enrollment_id: req.body.eId,
    enrollment_detail: {
      other_fields: JSON.stringify(userInfo),
      step: "2",
    },
    action: "update_enrollment_detail",
    agent_id: "Devteam",
    source: "ENROLLMENT_PORTAL",
    request_name: "enrollment",
    vendor_id: "WhoopConnect",
    token_id: 544475863,
    ip: "52.6.37.152, 172.22.3.133",
  };

  axios
    .post(apiUrl, data, config)
    .then(function (response) {
      console.log("6 Server Response:>>>>>>>>>>>>>>>>>>", response.data);

      res.send(response.data);
    })
    .catch(function (error) {
      console.log("6 Error respnse from Server:>", error);
      res.send(response.data);
    });
};

export const validateAddress = async (req, res) => {
  var apiUrl = "https://www.vcareapi.com:8080/address";
  const config = {
    headers: { token: req.body.token },
  };

  var data = {
    enrollment_id: req.body.eId,
    first_name: req.body.firstName,
    middle_name: req.body.min,
    last_name: req.body.lastName,
    address_validation: "Y",
    address_one: req.body.address,
    address_two: "",
    city: req.body.city,
    state: req.body.sState,
    zip_code: req.body.zipCode,
    is_temp: "Y",
    ssn: req.body.ssn,
    dob: req.body.dob,
    customer_suffix: "",
    customer_prefix: "",
    language_code: null,
    print_font_size: "S",
    mailing_address_one: "2836 HAZEL ST",
    mailing_address_two: "",
    mailing_city: "AUGUSTA",
    mailing_state: "GA",
    mailing_zip: "30909",
    address_type: "1",
    beneficiary_suffix: "",
    beneficiary_first_name: req.body.firstName,
    beneficiary_middle_name: "",
    beneficiary_last_name: req.body.lastName,
    beneficiary_dob: req.body.dob,
    beneficiary_ssn: req.body.ssn,
    is_ebb_qualify: "Y",
    lifeline_enrollment_type: "ACP",
    initial_choosen_enrollment_type: "ACP",
    ebb_verify_type: "NV",
    agent_code: null,
    refersion_code: "",
    fundraiser: null,
    action: "address_validation",
    agent_id: "Devteam",
    source: "WEBSITE",
    request_name: "address",
    vendor_id: "MaxSip",
    token_id: 547982001,
    ip: "52.6.37.152, 172.22.3.133",
  };

  axios
    .post(apiUrl, data, config)
    .then(function (response) {
      console.log("7 Server Response:>>>>>>>>>>>>>>>>>>", response.data);

      res.send(response.data);
    })
    .catch(function (error) {
      console.log("7 Error respnse from Server:>", error);
      res.send(response.data);
    });
};

export const programList = async (req, res) => {
  var apiUrl = "https://www.vcareapi.com:8080/programs";
  const config = {
    headers: { token: req.body.token },
  };
  var data = {
    zip_code: req.body.zipCode,
    is_tribal: "N",
    lifeline_enrollment_type: "ACP",
    initial_choosen_enrollment_type: "ACP",
    action: "programs_income_list",
    agent_id: "Devteam",
    source: "WEBSITE",
    request_name: "programs",
    vendor_id: "MaxSip",
    token_id: 548017553,
    ip: "52.6.37.152, 172.22.3.133",
  };

  axios
    .post(apiUrl, data, config)
    .then(function (response) {
      console.log("8 Server Response:>>>>>>>>>>>>>>>>>>", response.data);

      res.send(response.data);
    })
    .catch(function (error) {
      console.log("8 Error respnse from Server:>", error);
      res.send(response.data);
    });
};

export const eligibiltyCheck = async (req, res) => {
  var apiUrl = "https://www.vcareapi.com:8080/nlad";
  const config = {
    headers: { token: req.body.token },
  };
  var data = {
    enrollment_id: req.body.eId,
    first_name: req.body.firstName,
    middle_name: req.body.min,
    last_name: req.body.lastName,
    address_one: req.body.address,
    address_two: "",
    city: req.body.city,
    state: req.body.sState,
    zip_code: req.body.zipCode,
    ssn: req.body.ssn,
    dob: req.body.dob,
    tribal_id: null,
    beneficiary_first_name: req.body.firstName,
    beneficiary_last_name: req.body.lastName,
    beneficiary_dob: req.body.dob,
    beneficiary_ssn: req.body.ssn,
    beneficiary_tribal_id: null,
    program_code: ["SNAP"],
    no_of_household: "",
    carrier_url:
      "https://demoenrollments-whoopconnect.telgoo5.com/national-verifier-callback/",
    public_housing_code: "",
    action: "eligibility_check",
    agent_id: "Devteam",
    source: "WEBSITE",
    request_name: "nlad",
    vendor_id: "Maxsip",
    token_id: 547989779,
    ip: "52.6.37.152, 172.22.3.133",
  };

  axios
    .post(apiUrl, data, config)
    .then(function (response) {
      console.log("9 Server Response:>>>>>>>>>>>>>>>>>>", response.data);

      res.send(response.data);
    })
    .catch(function (error) {
      console.log("9 Error respnse from Server:>", error);
      res.send(response.data);
    });
};

export const eligibiltyStatusCheck = async (req, res) => {
  var apiUrl = "https://www.vcareapi.com:8080/nlad";
  const config = {
    headers: { token: req.body.token },
  };
  var data = {
    enrollment_id: req.body.eId,
    first_name: req.body.firstName,
    middle_name: req.body.min,
    last_name: req.body.lastName,
    address_one: req.body.address,
    address_two: "",
    city: req.body.city,
    state: req.body.sState,
    zip_code: req.body.zipCode,
    ssn: req.body.ssn,
    dob: req.body.dob,
    tribal_id: null,
    beneficiary_first_name: req.body.firstName,
    beneficiary_last_name: req.body.lastName,
    beneficiary_dob: req.body.dob,
    beneficiary_ssn: req.body.ssn,
    beneficiary_tribal_id: null,
    program_code: ["SNAP"],
    no_of_household: "",
    carrier_url:
      "https://demo-enrollments-maxsipconnects-web.telgoo5.com/national-verifier-callback/",
    public_housing_code: "",
    action: "eligibility_status_check",
    agent_id: "Devteam",
    source: "WEBSITE",
    request_name: "nlad",
    vendor_id: "Maxsip",
    token_id: 547991017,
    ip: "52.6.37.152, 172.22.3.133",
  };

  axios
    .post(apiUrl, data, config)
    .then(function (response) {
      console.log("10 Server Response:>>>>>>>>>>>>>>>>>>", response.data);

      res.send(response.data);
    })
    .catch(function (error) {
      console.log("10 Error respnse from Server:>", error);
      res.send(response.data);
    });
};

export const verifyACP = async (req, res) => {
  var apiUrl = "https://www.vcareapi.com:8080/nlad";
  const config = {
    headers: { token: req.body.token },
  };
  var data = {
    enrollment_id: req.body.eId,
    first_name: req.body.firstName,
    middle_name: req.body.min,
    last_name: req.body.lastName,
    address_one: req.body.address,
    address_two: "",
    city: req.body.city,
    state: req.body.sState,
    zip_code: req.body.zipCode,
    mailing_address_one: req.body.address,
    mailing_address_two: "address",
    mailing_city: req.body.city,
    mailing_state: req.body.sState,
    mailing_zip: req.body.zipCode,
    ssn: req.body.ssn,
    dob: req.body.dob,
    tribal_id: null,
    beneficiary_first_name: req.body.firstName,
    beneficiary_last_name: req.body.lastName,
    beneficiary_dob: req.body.dob,
    beneficiary_ssn: req.body.ssn,
    beneficiary_tribal_id: null,
    program_code: ["SNAP"],
    no_of_household: "",
    ebb_verify_type: "NV",
    school_name: "",
    contact_number: req.body.pNumber,
    application_id: "",
    real_household: "Y",
    acp_cert_ind: 1,
    email: req.body.email,
    transfer_exception: "",
    action: "nlad_verify_ebb",
    agent_id: "Devteam",
    source: "WEBSITE",
    request_name: "nlad",
    vendor_id: "Maxsip",
    token_id: 547991065,
    ip: "52.6.37.152, 172.22.3.133",
  };

  axios
    .post(apiUrl, data, config)
    .then(function (response) {
      console.log("11 Server Response:>>>>>>>>>>>>>>>>>>", response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log("11 Error respnse from Server:>", error);
      res.send(response.data);
    });
};

export const getPlanList = async (req, res) => {
  var apiUrl = "https://www.vcareapi.com:8080/plan";
  const config = {
    headers: { token: req.body.token },
  };
  var data = {
    enrollment_type: "LIFELINE",
    is_enrollment: "Y",
    zip_code: req.body.zipCode,
    login_log_otp: 31312,
    carrier: "",
    lifeline_enrollment_category: "ACP",
    action: "plan_list",
    agent_id: "Devteam",
    source: "WEBSITE",
    request_name: "plan",
    vendor_id: "Maxsip",
    token_id: 548016589,
    ip: "52.6.37.152, 172.22.3.133",
  };
  axios
    .post(apiUrl, data, config)
    .then(function (response) {
      console.log("12 Server Response:>>>>>>>>>>>>>>>>>>", response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log("12 Error respnse from Server:>", error);
      res.send(response.data);
    });
};

export const createCustomer = async (req, res) => {
  var apiUrl = "https://www.vcareapi.com:8080/customer";
  const config = {
    headers: { token: req.body.token },
  };
  var data = {
    enrollment_id: req.body.eId,
    customer_suffix: "",
    customer_prefix: "",
    first_name: req.body.firstName,
    middle_initial: req.body.min,
    last_name: req.body.lastName,
    second_last_name: "",
    email: req.body.email,
    dob: req.body.dob,
    ssn: req.body.ssn,
    tribal_id: null,
    primary_telephone_number: req.body.pNumber,
    driver_license_number: "",
    alternate_contact_name: "",
    best_way_to_reach: ["email"],
    is_rural: "N",
    address_validation: "N",
    service_address_one: req.body.address,
    service_address_two: req.body.address,
    service_zip: req.body.zipCode,
    service_city: req.body.city,
    service_state: req.body.sState,
    mailing_address_one: "2817 RIDGECREST DR",
    mailing_address_two: req.body.address,
    mailing_zip: "30815",
    mailing_city: "HEPHZIBAH",
    mailing_state: "GA",
    beneficiary_suffix: "",
    beneficiary_first_name: req.body.firstName,
    beneficiary_middle_name: "",
    beneficiary_last_name: req.body.lastName,
    beneficiary_dob: req.body.dob,
    beneficiary_ssn: req.body.ssn,
    beneficiary_tribal_id: null,
    program_code: ["SNAP"],
    address_type: "P",
    no_of_household: "",
    is_household: "Y",
    plan_id: req.body.pId,
    adults_household: "",
    kids_household: "",
    total_annual_income: "",
    household_adult: "N",
    household_share: "",
    household_lifeline: "",
    household_parent: "",
    household_relative: "",
    household_roommate: "",
    household_other: "",
    enrollment_type: "HANDOVER",
    carrier: "",
    certify1: "Y",
    certify2: "Y",
    consent_check: "Y",
    ip_address: "172.22.1.57",
    is_tribal: "N",
    login_log_otp: 31312,
    language_code: null,
    print_font_size: "S",
    old_tsp_id: "",
    old_phone_number: "",
    coordinate: { latitude: "33.2443455", longitude: "-81.3822102" },
    resolution: { width: "582", height: "931" },
    agent_id: "Devteam",
    lifeline_customer_contract: "N",
    is_ebb_qualify: "Y",
    lifeline_enrollment_type: "ACP",
    acp_cert_ind: 1,
    acp_benefit_transfer_consent: null,
    acp_benefit_transfer_question_one: "Y",
    acp_benefit_transfer_question_two: "Y",
    initial_choosen_enrollment_type: "ACP",
    ebb_verify_type: "NV",
    school_name: "",
    school_district_name: "",
    is_lifeline_duplicate_found: "N",
    is_existing_mobile_service: null,
    is_sim_only_order: "N",
    device_benefit_already_reimbursed: "N",
    is_free_phone_order: "N",
    nv_ebb_application_id: "",
    refersion_code: "",
    order_status: "New",
    transfer_exception: "",
    is_required_preactivated_sim: "N",
    assign_agent_id: null,
    action: "create_lifeline_customer",
    source: "WEBSITE",
    request_name: "customer",
    vendor_id: "Maxsip",
    token_id: 547991297,
    ip: "52.6.37.152, 172.22.3.133",
  };
  axios
    .post(apiUrl, data, config)
    .then(function (response) {
      console.log("13 Server Response:>>>>>>>>>>>>>>>>>>", response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.log("13 Error respnse from Server:>", error);
      res.send(response.data);
    });
};
