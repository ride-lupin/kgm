// 약관 타입
type TermsType = {
  all: boolean;
  required: boolean;
  optional: boolean;
};

type CreateReservationBaseType = {
  carModelId: number;
  testDriveSpotId: number;
  testDriveProgramId: number;
  testDriveTimeTableId: number;
  authenticationId: number;
};

type CreateReservationFormType = CreateReservationBaseType & {
  date: string;
  terms: TermsType;
};

type CreateReservationType = CreateReservationBaseType & {
  optionalTermsAgreeYN: boolean;
};

type CreateReservationResponseType = {
  userName: string;
  userPhone: string;
  testDriveStartDate: string;
  testDriveEndDate: string;
  carModelName: string;
  testDriveSpotName: string;
  testDriveSpotAddress: string;
  testDriveProgramTitle: string;
};

// 단일 조회
type TestDriveSpotType = {
  testDriveSpotId: number;
  testDriveSpotName: string;
  testDriveSpotAddress: string;
  testDriveSpotMap: string;
};

// 리스트 조회
type TestDriveSpotListType = Pick<TestDriveSpotType, "testDriveSpotId">;

// 리스트 조회
type TestDriveCarType = {
  carModelId: number;
  carModelImageList: string[];
  carModelName: string;
};

// 리스트 조회
type TestDriveProgramType = {
  testDriveProgramTitle: string;
  testDriveProgramContent: string;
  testDriveProgramImage: string;
  testDriveProgramDetailList: string[];
} & Pick<CreateReservationType, "testDriveProgramId">;

// 리스트 조회
type TestDriveTimeTableListType = {
  testDriveTimeTableId: number;
  testDriveTimeTableTitle: string;
  testDriveTimeTableStartDate: string;
  testDriveTimeTableEndDate: string;
  ableToReserveYN: boolean;
};

type TestDriveTimeTableType = {
  date: string;
  ableToReserveYN: boolean;
  testDriveTimeTableList: TestDriveTimeTableListType[];
};

type PostAuthenticationType = {
  name: string;
  phone: string;
};

type PostAuthenticationConfirmType = PostAuthenticationType & {
  authNumber?: string;
};

type DriveListType = {
  testDriveId: number;
  testDriveStatus: "reserve" | "cancel";
  testDriveStartDate: string;
  testDriveEndDate: string;
  createDate: string;
  testDriveSpotName: string;
  testDriveSpotAddress: string;
  testDriveProgramTitle: string;
  carModelName: string;
  ableToCancelYN: boolean;
};

type CancelTestDriveType = Pick<DriveListType, "testDriveId"> &
  PostAuthenticationType;

export type {
  CreateReservationType,
  CreateReservationFormType,
  CreateReservationResponseType,
  TermsType,
  TestDriveSpotType,
  TestDriveSpotListType,
  TestDriveCarType,
  TestDriveProgramType,
  TestDriveTimeTableListType,
  TestDriveTimeTableType,
  PostAuthenticationType,
  PostAuthenticationConfirmType,
  DriveListType,
  CancelTestDriveType,
};
