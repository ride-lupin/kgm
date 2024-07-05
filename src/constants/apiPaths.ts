const apiPaths = {
  getMeta: "/meta",

  getSpotList: "/testDriveSpot/list",
  getSpot: "/testDriveSpot/one",

  getTestDriveTimeTable: "/testDriveTimeTable/list",
  getTestDriveCarList: "/carModel/list",
  getTestDriveProgramList: "/testDriveProgram/list",

  getTestDriveList: "/testDrive/list",
  reserveTestDrive: "/testDrive/reserve",
  cancelTestDrive: "/testDrive/cancel",

  authentication: "/authentication",
  authenticationConfirm: "/authentication/confirm",
} as const;

export default apiPaths;
