let IR_waarde = 0
IR.IR_init()
basic.forever(function () {
    IR_waarde = IR.IR_read()
})
basic.forever(function () {
    basic.showNumber(IR_waarde)
})
