let alive = true;
while (alive) {
    console.log('pode ir de durmas')
    let lifeOrDeath = Math.random()
    if (lifeOrDeath >= 0.6) alive = false
}
console.log('num tá podendo durmi :(')