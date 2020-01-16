import React, { Component } from "react";

import { Title } from "./Title";


export class Bookings extends Component {
  render() {
    return (
      <div class="bookings_ctr _ctr_shell">
        <Title page="Bookings" reduceMargin={true} />
        <iframe className="bookings_fra" src="https://app.acuityscheduling.com/schedule.php?owner=14710602"></iframe>
        <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
      </div>
    );
  }
}
