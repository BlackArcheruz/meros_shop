import { gql } from '@apollo/client'

const TOVAR = gql`
    query tovarlarDetails($linkNumber: Int!) {
        tovarlarDetails(linkNumber: $linkNumber) {
            id
            title
            author
            language
            publishedYear
            page
            price
            tovarId
        }
    }
`

const KORZINKA = gql`
    mutation korzinka($productID: ID! $productCount: Int! $productSum: Int!) {
        korzinka(productID: $productID productCount: $productCount productSum: $productSum)
    }
`
const RECOMMENDED = gql`
    query {
        recommendedHome {
            id
            tovarId
            tovarName
            tovarPrice
            tovarLink
            subcategoryName
        }
    }
`

const BY_TOVAR_ID = gql`
    query byTovarId($tovarId: ID! $page: Number! $limit: Number!) {
        byTovarId(tovarId: $tovarId page: $page limit: $limit) {
            id
            userName
            rate
            body
            createdTime
        }
    }
`

const CREATE_OTZIV = gql`
    mutation createOtziv($body: String! $rate: Int! $tovarId: ID!) {
        createOtziv(body: $body rate: $rate tovarId: $tovarId)
    }
`

const FIRST_STAR = gql`
    query firstCount($tovarId: ID!) {
        firstCount(tovarId: $tovarId) {
            count
        }
    }
`

const SECOND_STAR = gql`
    query secondCount($tovarId: ID!) {
        secondCount(tovarId: $tovarId) {
            count
        }
    }
`

const THIRD_STAR = gql`
    query threeCount($tovarId: ID!) {
        threeCount(tovarId: $tovarId) {
            count
        }
    }
`

const FOURTH_STAR = gql`
    query fourCount($tovarId: ID!) {
        fourCount(tovarId: $tovarId) {
            count
        }
    }
`

const FIVE_STAR = gql`
    query fiveCount($tovarId: ID!) {
        fiveCount(tovarId: $tovarId) {
            count
        }
    }
`

const ALL_COUNT = gql`
    query allCount($tovarId: ID!) {
        allCount(tovarId: $tovarId) {
            count
        }
    }
`

const COUNT = gql`
    query countOtziv($limit: Number! $tovarId: ID!) {
        countOtziv(limit: $limit tovarId: $tovarId)
    }
`

export {
    TOVAR,
    KORZINKA,
    RECOMMENDED,
    BY_TOVAR_ID,
    CREATE_OTZIV,
    FIRST_STAR,
    SECOND_STAR,
    THIRD_STAR,
    FOURTH_STAR,
    FIVE_STAR,
    ALL_COUNT,
    COUNT
}