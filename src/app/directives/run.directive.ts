import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[run]'
})
export class RunDirective {

  constructor(private readonly elRef:ElementRef) { }
  @HostListener('input', ['$event'])
  onChangeInput(event: Event):void{
    console.log('entro directiva')
    const formatoRun = /^[0-9]+-[0-9kK]{1}$/
    const valorInicial = this.elRef.nativeElement.value
    this.elRef.nativeElement.value = valorInicial.replace(formatoRun, '')
    if(valorInicial !== this.elRef.nativeElement.value)
      event.stopPropagation()
  }
}
