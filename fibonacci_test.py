import fibonacci

class Testfibonacci:
    def test_fibonacci(self):
        assert fibonacci.fibonacci(0) == 0
    def test_fibonacci1(self):
        assert fibonacci.fibonacci(1) == 1
    def test_fibonacci2(self):
        assert fibonacci.fibonacci(2) == 1
    def test_fibonacci3(self):
        assert fibonacci.fibonacci(3) == 2
    def test_fibonacci4(self):
        assert fibonacci.fibonacci(-1) == 
