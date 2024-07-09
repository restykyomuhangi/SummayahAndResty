import factorial

class Testfactorial:
    def test_factorial1(self):
        assert factorial.factorial(1) == 1

    def test_factorial2(self):
        assert factorial.factorial(2) == 2

    def test_factorial3(self):
        assert factorial.factorial(3) == 6
        
    def test_factorial4(self):
        assert factorial.factorial(4) == 24

