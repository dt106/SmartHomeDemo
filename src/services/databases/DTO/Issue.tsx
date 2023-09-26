export default class IssueDTO{
    id!: number;
    title!: string;
    issueStatusId!: number;
    description!: string;
    resolveContent!: string;
    endUserId!: number;
    customerId!: number;
    rowId!: string;
    createdAt!: Date;
    updatedAt!: Date;
    completedAt!: Date;
    issueStatus!: {
        id: number;
        code: string;
        name: string;
        informations: string;
        warnings: string;
        errors: string;
        disabled: any;
        generalInformations: any;
        generalWarnings: any;
        generalErrors: any;
    };
    endUser: any;
    issueFileMappings: any;
    informations!: string;
    warnings!: string;
    errors!: string;
    disabled!: string;
    generalInformations: any;
    generalWarnings: any;
    generalErrors: any
}

class IssueStatus{
    
}