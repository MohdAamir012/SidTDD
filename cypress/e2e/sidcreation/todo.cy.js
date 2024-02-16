/// <reference types="cypress" />

import { SidCreation } from "../pageObject/sidCreation"

let sidCreation = new SidCreation();

describe('create sid thorugh tpma portal', () => {
  beforeEach(() => {
    cy.visit('https://qa-portal.tataplay.com/')
  })

  it('creating sid ', () => {
    let obj= {};
    sidCreation.before();
    obj=sidCreation.fillDetails(obj);
    sidCreation.gotoSDPage();
    sidCreation.selectLang();
    sidCreation.selectType();
    sidCreation.selectPack();
    sidCreation.paymentDetail();
    sidCreation.setupDeliveryAdd();
    sidCreation.selectPaymentMode();
    sidCreation.enterOtp();
    obj=sidCreation.getSid(obj);
     })

})
