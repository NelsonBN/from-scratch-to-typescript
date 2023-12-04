enum OrderStatus {
    Pending,
    Processing,
    Complete
}

console.log(OrderStatus);

console.log('------------------');

console.log(OrderStatus.Pending);
console.log(OrderStatus.Processing);
console.log(OrderStatus.Complete);

console.log('------------------');

enum CountryCodes {
    Portugal = 'PT',
    UnitedKingdom = 'UK',
    UnitedStates = 'US',
    Germany = 'DE',
    Spain = 'ES'
}

console.log(CountryCodes);

console.log('------------------');

const myOrder = {
    id: 1,
    status: OrderStatus.Processing
};

if (myOrder.status === OrderStatus.Pending) {
    console.log('Order is pending');
} else if (myOrder.status === OrderStatus.Processing) {
    console.log('Order is processing');
} else if (myOrder.status === OrderStatus.Complete) {
    console.log('Order is complete');
}

