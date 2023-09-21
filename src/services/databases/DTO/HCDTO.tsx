export default class HCDTO {
    id: any;
    endUserProfileId: string | undefined;
    dormitoryId!: string;
    name!: string;
    macAddress!: string;
    ipAddress!: string;
    wifiName!: string;
    timeZone: any;
    version!: string;
    versionUpdatedAt!: Date;
    isMaster!: boolean;
    homeControllerActiveStatusId!: number;
    homeControllerTypeId: any;
    createdAt!: Date;
    updatedAt!: Date;
    deletedAt!: Date | null ;
    apiPingAt!: Date | null;
    signalrPingAt!: Date | null;
    homeControllerActiveStatus: any;
    homeControllerType: any;
    informations: any;
    warnings: any;
    errors: any;
    disabled: any;
    generalInformations!: any[];
    generalWarnings!: any[];
    generalErrors!: any[];
  }
  