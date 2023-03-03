/**
 * Tests unitaires du projet Impôts sur le revenu
 * 
 */
MesTestsUnitaires = TestCase('ImpotsTest');
MesTestsUnitaires.prototype.testsTranche1 = function () {
    assertEquals('0€ de revenus', 0, recupMontantImposition(0));
    assertEquals('5000€ de revenus', 0, recupMontantImposition(5000));
    assertEquals('10777€ de revenus', 0, recupMontantImposition(10777));
};
MesTestsUnitaires.prototype.testsTranche2 = function () {
    assertEquals('10778€ de revenus', 0.11, recupMontantImposition(10778));
    assertEquals('15000€ de revenus', 464.53, recupMontantImposition(15000));
    assertEquals('27478€ de revenus', 1837.11, recupMontantImposition(27478));
};
MesTestsUnitaires.prototype.testsTranche3 = function () {
    assertEquals('27479€ de revenus', 1837.41, recupMontantImposition(27479));
    assertEquals('30000€ de revenus', 2593.71, recupMontantImposition(30000));
    assertEquals('78570€ de revenus', 17164.71, recupMontantImposition(78570));
};
MesTestsUnitaires.prototype.testsTranche4 = function () {
    assertEquals('78571€ de revenus', 17165.12, recupMontantImposition(78571));
    assertEquals('100000€ de revenus', 25951.01, recupMontantImposition(100000));
    assertEquals('168994€ de revenus', 54238.55, recupMontantImposition(168994));
};
MesTestsUnitaires.prototype.testsTranche5 = function () {
    assertEquals('168995€ de revenus', 54239.45, recupMontantImposition(168995));
    assertEquals('1000000€ de revenus', 428191.70, recupMontantImposition(1000000));
};