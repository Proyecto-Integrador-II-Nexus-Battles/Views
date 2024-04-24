function modificacionCarta() {
    window.location.href = "/modificacionCarta";
}
const defaultFIle = "../Imagenes/Frostfang.jpg";
const img = document.getElementById('imagen');
const file = document.getElementById('pic');

function listenerInput(event) {
    const file = event.target.files[0];
    let url = window.URL.createObjectURL(file);
    img.src = url;
}


file?.addEventListener('change', listenerInput);

async function navRouter(rute) {

    // Recopilar el ID de la carta
    const _id = document.getElementById('cardId').value;

    // Recopilar el tipo de carta
    const TypeCard = document.getElementById('cardType').value;

    // Inicializar el objeto data con los valores comunes
    const data = {
        _id: _id,
        TypeCard: TypeCard
    };

    console.log(data);
    console.log(1)
    // Recopilar valores adicionales según el tipo de carta
    if (TypeCard === 'Hero') {
        const Name = document.getElementById('Name').value;
        const Power = document.getElementById('HPower').value;
        const Live = document.getElementById('HLive').value;
        const Defense = document.getElementById('HDefense').value;
        const AttackBase = document.getElementById('HAttackBase').value;
        const DamageSides = document.getElementById('HDamageSides').value;
        const Description = document.getElementById('DescripcionCard').value;

        // Verificar si cada campo tiene un valor antes de asignarlo
        const heroData = {};
        if (Name) heroData.Name = Name;
        if (Power) heroData.Power = Power;
        if (Live) heroData.Live = Live;
        if (Defense) heroData.Defense = Defense;
        if (AttackBase) heroData.AttackBase = AttackBase;
        if (DamageSides) heroData.DamageSides = DamageSides;
        if (Description) heroData.Description = Description;

        // Asignar los datos recopilados al objeto data
        Object.assign(data, heroData);
    } else if (TypeCard === 'Item') {
        const Name = document.getElementById('Name').value;
        const DamageBuff = document.getElementById('IDamageBuff').value;
        const EnemyDamageNerf = document.getElementById('IEnemyDamageNerf').value;
        const Description = document.getElementById('DescripcionCard').value;

        // Verificar si cada campo tiene un valor antes de asignarlo
        const itemData = {};
        if (Name) itemData.Name = Name;
        if (DamageBuff) itemData.DamageBuff = DamageBuff;
        if (EnemyDamageNerf) itemData.EnemyDamageNerf = EnemyDamageNerf;
        if (Description) itemData.Description = Description;

        // Asignar los datos recopilados al objeto data
        Object.assign(data, itemData);
    } else if (TypeCard === 'Armor') {
        const Name = document.getElementById('Name').value;
        const DefenseBuff = document.getElementById('ADefenseBuff').value;
        const Description = document.getElementById('DescripcionCard').value;

        // Verificar si cada campo tiene un valor antes de asignarlo
        const armorData = {};
        if (Name) armorData.Name = Name;
        if (DefenseBuff) armorData.DefenseBuff = DefenseBuff;
        if (Description) armorData.Description = Description;

        // Asignar los datos recopilados al objeto data
        Object.assign(data, armorData);
    } else if (TypeCard === 'Weapon') {
        const Name = document.getElementById('Name').value;
        const attackBuff = document.getElementById('WAttackBuff').value;
        const DamageBuff = document.getElementById('WDamageBuff').value;
        const DefenseBuff = document.getElementById('WDefenseBuff').value;
        const EnemyDamageNerf = document.getElementById('WEnemyDamageNerf').value;
        const Description = document.getElementById('DescripcionCard').value;

        // Verificar si cada campo tiene un valor antes de asignarlo
        const weaponData = {};
        if (Name) weaponData.Name = Name;
        if (attackBuff) weaponData.attackBuff = attackBuff;
        if (DamageBuff) weaponData.DamageBuff = DamageBuff;
        if (DefenseBuff) weaponData.DefenseBuff = DefenseBuff;
        if (EnemyDamageNerf) weaponData.EnemyDamageNerf = EnemyDamageNerf;
        if (Description) weaponData.Description = Description;

        // Asignar los datos recopilados al objeto data
        Object.assign(data, weaponData);
    } else if (TypeCard === 'Talent') {
        const Name = document.getElementById('Name').value;
        const NormalLiveBuff = document.getElementById('TNormalLiveBuff').value;
        const EspecialDamageBuff = document.getElementById('TEspecialDamageBuff').value;
        const Description = document.getElementById('DescripcionCard').value;

        // Verificar si cada campo tiene un valor antes de asignarlo
        const talentData = {};
        if (Name) talentData.Name = Name;
        if (NormalLiveBuff) talentData.NormalLiveBuff = NormalLiveBuff;
        if (EspecialDamageBuff) talentData.EspecialDamageBuff = EspecialDamageBuff;
        if (Description) talentData.Description = Description;

        // Asignar los datos recopilados al objeto data
        Object.assign(data, talentData);
    }
    // Enviar los datos al backend utilizando fetch - Utilizar el HOST y PORT correspondiente
    console.log("hola")
    fetch('/inventario/modifyCard', {
        method: 'POST',  
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: data })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
            // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrar un mensaje al usuario
        })
        .catch(error => {
            console.error('Error al enviar los datos:', error);
            // Aquí puedes manejar los errores, por ejemplo, mostrar un mensaje de error al usuario
        });
    localStorage.setItem('showmodal', 'true')
}



