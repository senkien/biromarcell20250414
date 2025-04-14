form: FormGroup;

constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

ngOnInit(): void {
  const recipe = this.route.snapshot.data['recipe'];

  this.form = this.fb.group({
    name: [recipe.name, Validators.required],
    prepTimeMinutes: [recipe.prepTimeMinutes, [Validators.required, Validators.min(5)]],
    cookTimeMinutes: [recipe.cookTimeMinutes, [Validators.required, Validators.min(5)]],
    cuisine: [recipe.cuisine, Validators.required]
  });
}

