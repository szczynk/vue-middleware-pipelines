export default function isSubscribed({ next, store }) {
    if (!store.state.user.isSubscribed) {
        return next({ name: 'dashboard' })
    }

    return next()
}