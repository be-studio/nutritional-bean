import React, { Component } from "react";
import { connect } from "react-redux";

import { Title } from "./Title";


function mapStateToProps(state) {
  return {
    footerHeight: state.footerHeight
  };
}


export class ConnectedTerms extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return(
      <div className="terms_ctr _ctr_shell" style={{ marginBottom: this.props.footerHeight }}>
        <Title page="Terms of Business" />

        <div class="terms_ctr_content">
          <h2 className="_ttl_other-info">PAYMENT</h2>
          <ol>
            <li>Services must be paid for in advance by direct debit or cash as per the invoicing details provided by The Nutritional Bean to you.</li>
          </ol>

          <h2 className="_ttl_other-info">RE-SCHEDULING, CANCELLATIONS AND REFUNDS</h2>
          <ol start="2">
            <li>Please arrive at the agreed start time for your consultation, or be available for your call at the agreed start time; if you are late, the duration of the service may be reduced andThe Nutritional Bean will not be obliged to make up for any lost time.</li>
            <li>Consultations may be re-scheduled by giving 24 hour’s written notice by emailing bean@thenutritionalbean.com. This means that your consultation may be re-scheduled for another date but it will not be refunded. If you do not give 24 hour’s written notice, your Consultation and fees paid may be forfeited.</li>
            <li>The Nutritional Bean reserves the right to amend any consultation upon 24 hour’s written notice to you (using the contact details you have provided) or as otherwise agreed with you. The Nutritional Bean will endeavour to reschedule your consultation as soon as possible.</li>
            <li>You may cancel any pre-paid Services and obtain a full refund upon 48-hours notice (providing you have not booked a Consultation that takes place within 12 hours of purchase); thereafter fees may be payable for any preparatory work undertaken by Harriet Bindloss and charged at her discretion.</li>
            <li>If you have commenced a programme and wish to cancel prior to the end of all scheduled services offered within the programme, you shall be obligated to pay all fees accrued prior to the effectiveness of your cancellation. Helen Macklin reserves the right to include fees for all preparatory work and research undertaken in addition to the scheduled contact dates for consultations and calls.</li>
            <li>The Nutritional Bean reserves the right to decline to provide the Services to you for any reason and will refund any amounts pre-paid by you for Services not received.</li>
          </ol>
        </div>
      </div>
    );
  }
}

const Terms = connect(mapStateToProps, null)(ConnectedTerms);
export default Terms;
