/** @format */

import { Link } from 'react-router-dom'

export default function CardLinkWrapper({ to, children }) {
  return !!to ? <Link to={to}>{children}</Link> : children
}
