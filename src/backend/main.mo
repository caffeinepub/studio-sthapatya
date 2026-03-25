import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  type FirmProfile = {
    name : Text;
    address : Text;
    contactEmail : Text;
    contactPhone : Text;
    description : Text;
    services : [Text];
  };

  type TeamMember = {
    name : Text;
    position : Text;
    bio : Text;
  };

  type FinancialData = {
    year : Nat;
    revenue : Float;
    expenses : Float;
    profit : Float;
  };

  type FirmId = Text;

  type FirmInput = {
    name : Text;
    address : Text;
    contactEmail : Text;
    contactPhone : Text;
    description : Text;
    services : [Text];
  };

  type TeamMemberInput = {
    name : Text;
    position : Text;
    bio : Text;
  };

  let firms = Map.empty<FirmId, FirmProfile>();
  let teamMembers = Map.empty<FirmId, [TeamMember]>();
  let financialData = Map.empty<FirmId, [FinancialData]>();

  module FinancialData {
    public func compareByYear(a : FinancialData, b : FinancialData) : Order.Order {
      Nat.compare(a.year, b.year);
    };
  };

  public shared ({ caller }) func addFirm(firmId : FirmId, profile : FirmInput) : async () {
    let newProfile : FirmProfile = profile;
    firms.add(firmId, newProfile);
    teamMembers.add(firmId, []);
    financialData.add(firmId, []);
  };

  public shared ({ caller }) func updateTeamMembers(firmId : FirmId, newMembers : [TeamMemberInput]) : async () {
    let members : [TeamMember] = newMembers.map(func(m) { m });
    teamMembers.add(firmId, members);
  };

  public shared ({ caller }) func addFinancialData(firmId : FirmId, data : FinancialData) : async () {
    switch (financialData.get(firmId)) {
      case (null) { financialData.add(firmId, [data]) };
      case (?existing) {
        let updated = existing.concat([data]).sort(FinancialData.compareByYear);
        financialData.add(firmId, updated);
      };
    };
  };

  public query ({ caller }) func getFirmProfile(firmId : FirmId) : async ?FirmProfile {
    firms.get(firmId);
  };

  public query ({ caller }) func getTeamMembers(firmId : FirmId) : async ?[TeamMember] {
    teamMembers.get(firmId);
  };

  public query ({ caller }) func getFinancialData(firmId : FirmId) : async ?[FinancialData] {
    financialData.get(firmId);
  };

  public query ({ caller }) func getAllFirms() : async [FirmProfile] {
    firms.values().toArray();
  };
};
