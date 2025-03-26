import { TemperaturePipe } from './temperature.pipe';

describe('TemperaturePipe', () => {
  const pipe = new TemperaturePipe();

  it('should convert Celsius to Fahrenheit', () => {
    expect(pipe.transform(0, 'F')).toBe(32);
    expect(pipe.transform(100, 'F')).toBe(212);
  });

  it('should return the original Celsius value when unit is C', () => {
    expect(pipe.transform(25, 'C')).toBe(25);
  });

  it('should handle invalid/null input gracefully', () => {
    expect(pipe.transform(null as any, 'F')).toBeNaN();
  });
});
