import React from 'react'
import Header from './Header'
import { makeStyles } from '@material-ui/core'
import CategoriesTabs from './CategoriesTabs'

const useStyles = makeStyles(themes => ({
    container: {
        padding: 20
    }
}))

export default function Page({ children, categoriesTabs }) {
    const classes = useStyles()

    return (
        <>
            <Header>
                {Boolean(categoriesTabs) &&
                    <CategoriesTabs />
                }
            </Header>
            <div className={classes.container}>
                {children}
            </div>
        </>
    )
}
