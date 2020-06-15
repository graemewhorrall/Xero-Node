/**
 * Xero Payroll AU
 * This is the Xero Payroll API for orgs in Australia region.
 *
 * The version of the OpenAPI document: 2.2.1
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PayslipSummary {
    /**
    * The Xero identifier for an employee
    */
    'employeeID'?: string;
    /**
    * Xero identifier for the payslip
    */
    'payslipID'?: string;
    /**
    * First name of employee
    */
    'firstName'?: string;
    /**
    * Last name of employee
    */
    'lastName'?: string;
    /**
    * Employee group name
    */
    'employeeGroup'?: string;
    /**
    * The Wages for the Payslip
    */
    'wages'?: number;
    /**
    * The Deductions for the Payslip
    */
    'deductions'?: number;
    /**
    * The Tax for the Payslip
    */
    'tax'?: number;
    /**
    * The Super for the Payslip
    */
    '_super'?: number;
    /**
    * The Reimbursements for the Payslip
    */
    'reimbursements'?: number;
    /**
    * The NetPay for the Payslip
    */
    'netPay'?: number;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "employeeID",
            "baseName": "EmployeeID",
            "type": "string"
        },
        {
            "name": "payslipID",
            "baseName": "PayslipID",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "FirstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "LastName",
            "type": "string"
        },
        {
            "name": "employeeGroup",
            "baseName": "EmployeeGroup",
            "type": "string"
        },
        {
            "name": "wages",
            "baseName": "Wages",
            "type": "number"
        },
        {
            "name": "deductions",
            "baseName": "Deductions",
            "type": "number"
        },
        {
            "name": "tax",
            "baseName": "Tax",
            "type": "number"
        },
        {
            "name": "_super",
            "baseName": "Super",
            "type": "number"
        },
        {
            "name": "reimbursements",
            "baseName": "Reimbursements",
            "type": "number"
        },
        {
            "name": "netPay",
            "baseName": "NetPay",
            "type": "number"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PayslipSummary.attributeTypeMap;
    }
}

