import factorial

class Testfactorial:
    def test_factorial(self):
        assert factorial.factorial(1) == 1
        assert factorial.factorial(2) == 2
        assert factorial.factorial(3) == 6
        assert factorial.factorial(4) == 24

