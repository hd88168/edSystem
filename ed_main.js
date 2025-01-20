
// Define MyActivity class using the class syntax and extend android.app.Activity
var js__MyActivity = class __j__MainActivity extends android.app.Activity {
  // Constructor
  constructor() {
    super(); // Call the parent class constructor
    console.log('MyActivity initialized');
  }

  // onCreate method
  onCreate(savedInstanceState) {
    android.widget.Toast.makeText(
      this,
      'OK FROM JSNV',
      android.widget.Toast.LENGTH_SHORT
    ).show();
  }

  // toggleVPN method
  __js__toggleVPN(context) {
    console.log('Context type: ' + context);
    android.widget.Toast.makeText(
      this,
      'OK FROM JSNV',
      android.widget.Toast.LENGTH_SHORT
    ).show();
  }
};

// Apply JavaProxy decorator after class definition
obj__MyActivity = __decorate(
  [JavaProxy('com.hd168.oknet.MainActivity')], // Ensure this matches your package structure
  js__MyActivity
);

// Now MyActivity is correctly initialized and can be used
