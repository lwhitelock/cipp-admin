import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { listUser } from '../../../store/modules/identity'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CSpinner,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilClock } from '@coreui/icons'
import UserDetails from './UserDetails'

const columns = [
  {
    text: 'Last Sign in Date',
    dataField: 'LastSigninDate',
  },
  {
    text: 'Last Sign in Application',
    dataField: 'LastSigninApplication',
  },
  {
    text: 'Last Sign in Status',
    dataField: 'LastSigninStatus',
  },
  {
    text: 'Last Sign in Result',
    dataField: 'LastSigninResult',
  },
  {
    text: 'Last Sign in Failure Reason',
    dataField: 'LastSigninFailureReason',
  },
]

export default function UserLastLoginDetails({
  user: { user = {}, loading = false, loaded = false, error = undefined },
}) {
  return (
    <CCard>
      <CCardHeader className="d-flex justify-content-between">
        Last Login Details
        <CIcon icon={cilClock} />
      </CCardHeader>
      <CCardBody>
        {loading && !loaded && <CSpinner />}
        {loaded && !error && (
          <CTable>
            <CTableBody>
              {columns.map((column, index) => (
                <CTableRow key={index}>
                  <CTableDataCell>{column.text}</CTableDataCell>
                  <CTableDataCell>{user[column.dataField] ?? 'n/a'}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        )}
        {!loaded && !loading && error && <>Error loading user</>}
      </CCardBody>
    </CCard>
  )
}

UserLastLoginDetails.propTypes = {
  user: PropTypes.object.isRequired,
}
