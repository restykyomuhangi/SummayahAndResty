import fibonacci

class Testfibonacci:
    def test_fibonacci(self):
        assert fibonacci.fibonacci(0) == 0
    def test_fibonacci1(self):
        assert fibonacci.fibonacci(1) == 1