import React, { Component } from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import EventList from '../EventList/EventList'

export default class EventDashboard extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <GridColumn width={10}>
                        <EventList/>
                    </GridColumn>
                    <GridColumn width={6}>
                        <h2>Right Column</h2>
                    </GridColumn>
                </Grid>
            </div>
        )
    }
}
