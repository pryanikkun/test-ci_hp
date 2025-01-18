export default function checkHP(health) {
    if (health > 50) {
        return 'healthy'
    }
    if (health < 15) {
        return 'critical'
    }
    return 'wounded'
}